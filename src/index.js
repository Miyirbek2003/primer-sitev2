export default function scrollId(element) {
    const el = document.getElementById(element);
    window.scrollTo(el.offsetLeft, el.offsetTop - 50);
}

