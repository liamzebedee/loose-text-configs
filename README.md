loose-text-configs
==================

Stop hand-writing JSON for configurations that you can easily process like it's text! Small helper library that processes a multi-line string, ignoring empty lines and trims spacing, and runs a function for each line.

`yarn add loose-text-configs`

Originally built as [part of my Dutch NLP assistant](https://liamz.co/blog/integrating-nlp-into-language-learning-with-dutch/).

## Example
```javascript
import createConfig from 'loose-text-configs';
createConfig(
    `
    ADJ = JJR JJS
    BW = RBR RBS WRB
    LID = DT PDT WDT
    VG = CC
    `, 
    line => {
        let [dutchCode, enCodes] = line.split(' = ')
        enCodes.split(' ').map(code => {
            en2nlCodeMapping[code] = dutchCode
        })
    }
)

/*
Returns:

{
 "JJR": "ADJ",
 "JJS": "ADJ",
 "RBR": "BW",
 "RBS": "BW",
 "WRB": "BW",
 "DT": "LID",
 "PDT": "LID",
 "WDT": "LID",
 "CC": "VG"
}
*/
```