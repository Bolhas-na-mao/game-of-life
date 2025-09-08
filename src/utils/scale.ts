import { Sprite } from "pixi.js";
import gsap from "gsap";

function button(sprite: Sprite) {
  const baseScale = 0.4;
  sprite.scale.set(baseScale);

  sprite.anchor.set(0.5);

  sprite.eventMode = "static";

  sprite.cursor = "pointer";

  sprite.on("pointerenter", () =>
    gsap.to(sprite.scale, {
      duration: 0.2,
      x: baseScale * 1.05,
      y: baseScale * 1.05,
      ease: "power1.inOut",
    })
  );

  sprite.on("pointerleave", () =>
    gsap.to(sprite.scale, {
      duration: 0.2,
      x: baseScale,
      y: baseScale,
      ease: "power1.inOut",
    })
  );
}

export default { button };
