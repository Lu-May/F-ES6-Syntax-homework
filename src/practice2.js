const inject = (items, sections) => {
    for (let index = 0; index < sections.length; index++) {
        items.splice(sections[index].index + index, 0, sections[index].content)
    }
    return items
}
export { inject };
