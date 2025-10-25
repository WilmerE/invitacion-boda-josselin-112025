const select = document.querySelector('#select_urls')
const field = document.querySelector('#url')
const btn = document.querySelector('#btn')
const view = document.querySelector('#view_url')
const btn_wa = document.querySelector('#btn_wa')

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")
})

select.onchange = function(){
    view.innerHTML = ''
    if (this.value !== '0' && this.value !== '') {
        //let link = `https://${location.hostname}/0${this.value}`
        let link = `https://${location.hostname}`
        generar_msg(link)
        show_url(link)
    } else {
        field.value = ''
    }
}

function generar_msg(link){
    let msg = 'Eres una persona muy importante para mí y '+
            'es por ello que deseo que ingreses a nuestra invitación:\n\n'
    field.value = msg + link

    let send_wa = encodeURI(`https://wa.me/?text=${msg}${link}`)
    btn_wa.href = send_wa
    btn_wa.setAttribute('target', '_blank')
}

function show_url(link){

    let label_a = document.createElement("a")
    
    label_a.href = link
    label_a.textContent = link
    label_a.setAttribute('target', '_blank')

    view.appendChild(label_a)
}

btn.addEventListener("click", function() {
    field.select()
    field.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(field.value)

    alert('¡Texto copiado!')
})