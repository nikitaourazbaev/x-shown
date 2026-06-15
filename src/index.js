const aFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

export default function (Alpine) {
  Alpine.directive(
    'shown',
    Alpine.skipDuringClone((el, { expression }, { evaluateLater, cleanup }) => {
      if (!el._x_doShow) return;

      const evaluate = evaluateLater(expression);

      const doShow = el._x_doShow;

      el._x_doShow = async () => {
        doShow();

        await aFrame();
        let animations = el.getAnimations();

        // catch `x-transition:enter`
        if (!animations.length) {
          await aFrame();
          animations = el.getAnimations();
        }

        if (animations.length) {
          await Promise.all(
            animations.map((animation) => animation.finished)
          ).catch(() => {});
        }

        if (el._x_isShown) {
          evaluate();
        }
      };

      cleanup(() => {
        el._x_doShow = doShow;
      });
    })
  );

  Alpine.directive(
    'hidden',
    Alpine.skipDuringClone((el, { expression }, { evaluateLater, cleanup }) => {
      if (!el._x_doHide) return;

      const evaluate = evaluateLater(expression);

      const doHide = el._x_doHide;

      el._x_doHide = () => {
        doHide();

        evaluate();
      };

      cleanup(() => {
        el._x_doHide = doHide;
      });
    })
  );
}
