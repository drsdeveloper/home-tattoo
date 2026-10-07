const revealSelector =
  "[data-reveal], main > section, main > div, main > header, main article, .site-header, footer";

const observer =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
      )
    : null;

function observeRevealTargets(root) {
  const rootTarget =
    root.nodeType === Node.ELEMENT_NODE && root.matches(revealSelector)
      ? [root]
      : [];
  const targets = [...rootTarget, ...root.querySelectorAll(revealSelector)];
  const siblingIndexes = new Map();

  targets.forEach((target) => {
    if (!target.hasAttribute("data-reveal")) {
      const isCard = target.matches("article");
      const siblingIndex = siblingIndexes.get(target.parentElement) || 0;
      siblingIndexes.set(target.parentElement, siblingIndex + 1);
      target.dataset.reveal = isCard
        ? "scale"
        : siblingIndex % 2
          ? "right"
          : "left";
      target.style.setProperty(
        "--reveal-index",
        String(isCard ? siblingIndex : 0),
      );
    }

    if (target.classList.contains("is-visible")) return;
    if (observer) observer.observe(target);
    else target.classList.add("is-visible");
  });
}

observeRevealTargets(document);

const pageObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) observeRevealTargets(node);
    });
  });
});

pageObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
