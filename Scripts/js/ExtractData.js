function ExtractData() {
    var xpath = '//a[contains(text(), "Processo n.")]'
    var data = []

    var elementosCount = document.evaluate(
            `count(${xpath})`,
            document,
            null,
            XPathResult.ANY_TYPE, null
    )

    var elementos = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
        null
    )
    
    for (let i = 1; i <= elementosCount.numberValue; i++) {
        console.log(i)
        var e = elementos.iterateNext()
        data.push(e.getInnerHTML())
    }

    return data
}