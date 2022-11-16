export default function hideTargetLowerFooter() {
    const target = document.querySelector<HTMLElement>(".bottom-rect");
    const footer = document.querySelector<HTMLElement>("footer");
    if (!target || !footer) return;
    let topTarget = target.getBoundingClientRect().top;
    const topFooter = footer.getBoundingClientRect().top;

    // if (!offsetTarget) target.style.height = "1px";
    // offsetTarget = target.offsetHeight;
    // console.log("🚀 ~ offsetTarget", offsetTarget);
    // console.log("🚀 ~ offsetFooter", offsetFooter);
    topTarget > topFooter
        ? target.setAttribute("hidden", "hidden")
        : target.removeAttribute("hidden");
}
