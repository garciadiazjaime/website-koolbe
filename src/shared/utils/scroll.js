
export default function autoScroll(location) {
  const elementID = location.pathname ? location.pathname.split('/').pop() || 'inicio' : 'inicio';
  const scrollTo = $('#' + elementID).offset().top - 43;
  const srolltime = 400;
  $('html, body').animate({
    scrollTop: scrollTo,
  }, srolltime);
}
