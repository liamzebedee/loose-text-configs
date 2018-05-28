import createConfig from '.';
let en2nlCodeMapping = {};

createConfig(
    `
    ADJ = JJR JJS
    BW = RBR RBS WRB
    LID = DT PDT WDT
    VG = CC
    `, 
    line => {
        console.log(line)
        let [dutchCode, enCodes] = line.split(' = ')
        enCodes.split(' ').map(code => {
            en2nlCodeMapping[code] = dutchCode
        })
    }
)

console.log(JSON.stringify(en2nlCodeMapping, null, 1))