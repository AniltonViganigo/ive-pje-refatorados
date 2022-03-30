function CountProcess() {
    var elementos = document.evaluate(
        'count(//a[contains(text(), "Processo n. ")])',
        document,
        null,
        XPathResult.NUMBER_TYPE,
        null
    )

    return elementos.numberValue

}