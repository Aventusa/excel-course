export class TableSelection {

    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        this.group.push($el)
        this.current = $el
        $el.focus().addClass(TableSelection.className)
    }

    clear() {
        this.group.forEach($el => {
            $el.removeClass(TableSelection.className)
        })
        this.group = []
    }

    get selectedIds() {
        return this.group.map($el => $el.id())
    }

    selectGroup($groop = []) {
        this.clear()

        this.group = $groop
        this.group.forEach($el => {
            $el.addClass(TableSelection.className)
        })
    }

    applyStyle(style) {
        this.group.forEach($el => {
            $el.css(style)
        })
    }

}