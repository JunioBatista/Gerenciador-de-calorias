const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit )

function handleSubmit(event) {
    event.preventDefault()

    const gender =  getSelectedValue('gender')
    const age = getInputNumberValue('age')
    const weight = getInputNumberValue('weight')
    const height = getInputNumberValue('height')
    const activitylevel =  getSelectedValue('activity_level')

    const tmb = Math.round(
    gender === 'female'
        ? (655 + (9.6 * weight) + (1.8*height) - (4.7 * age)) 
        : (66 + (13.7*weight) + (5*height) - (6.8 * age))
    )
    
    const manutencao = Math.round(tmb * Number(activitylevel))
    const perderPeso = manutencao - 450 
    const ganharPeso = manutencao + 450

    const layout = `
    <h2>resultado:</h2>

        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${manutencao}  calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${perderPeso} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${ganharPeso} calorias</strong>.
            </li>
          </ul>
        </div>
    `

    const result = document.getElementById('result')
    result.innerHTML = layout

}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value)
} 

function getSelectedValue (id) {
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
}