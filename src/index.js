export default function(txt, parseLine) {
    return txt
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .map(parseLine)
}