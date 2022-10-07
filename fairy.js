window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` /*переменная скроллтоп дает
                                                                     позицию скролла по Y*/
})

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.warpper',
    content: '.content'
})
