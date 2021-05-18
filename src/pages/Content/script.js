export const AddHoverEffectOnLink = () => {
    // Array Links projects
    const DevArrLinks = Array.from(document.querySelectorAll('#developpement>.project>.link__project>.link__project_box'));
    const TypoArrLinks = Array.from(document.querySelectorAll('#typographie>.project>.link__project>.link__project_box'));
    const UxuiArrLinks = Array.from(document.querySelectorAll('#uxui>.project>.link__project>.link__project_box'));

    //
    const AllLinks = [];
    let currentIndex = 0;

    AllLinks.push(DevArrLinks, TypoArrLinks, UxuiArrLinks)

    //
    AllLinks.forEach(Arr => {
        Arr.forEach(Link => {
            Link.addEventListener('mouseenter', e => {
                currentIndex = Arr.indexOf(e.target);
                Arr.forEach((Link, index) => {
                    if (index === currentIndex) e.target.classList.add('link__project_box--hover');
                    if (index !== currentIndex) Link.classList.add('blur');
                })
            })

            Link.addEventListener('mouseleave', () => {
                Link.classList.remove('link__project_box--hover');
                Arr.forEach((Link) => Link.classList.remove('blur'))
            })
        })
    })

}