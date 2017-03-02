export const checkCollisions = (chicken, trampolines) => {
  trampolines.forEach((trampoline) => {
    console.log('chick' + chicken.getBounds());
    console.log("tramp" + trampoline.getBounds());
  });
};
