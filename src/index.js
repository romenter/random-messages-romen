const messages = [
    'Romen',
    'Busques',
    'Salomon',
    'Bictor',
    'Socrates',
    'Pircutiques',
    'Safar',
    'Baby q',
    'Louser Basic',
    'Quique',
    'Luciano'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = { randomMsg }