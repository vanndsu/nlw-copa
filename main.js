function createGame(time1,hour,time2){
  return `
  <li>
     <img src="./assets/icon-${time1}.svg" alt="Bandeira do ${time1}"/>
        <strong>${hour}</strong>
          <img src="./assets/icon-${time2}.svg" alt="Bandeira da ${time2}"/>
  </li>
  
  `
}

let delay = -0.2;
function createCard(date, day,games){

  delay = delay + 0.2;
  return`
    <div class="card" style="animation-delay: ${delay}s">                      
          <h2>${date} <span>${day}</span></h2>
            <ul>          
                ${games}  
          </ul>
          </div>            
  
  `

}

document.querySelector("#cards").innerHTML = 
  
    
          createCard('24/11','quinta',
          createGame('switzerland','07:00','cameroon')
          +
          createGame('uruguay','10:00','southkorea')
          +
          createGame('portugal','13:00','gana')
          +
          createGame('brazil','16:00','serbia'))
          +
            createCard('28/11','segunda',
            createGame('cameroon','07:00','serbia')
            +
            createGame('southkorea','10:00','gana')
            +
            createGame('brazil','13:00','switzerland')
            +
            createGame('portugal','16:00','uruguay'))
            +
              createCard('02/12', 'sexta',
              createGame('southkorea','12:00','portugal')
              +
              createGame('gana','12:00','uruguay')
              +
              createGame('serbia','16:00','switzerland')
              +
              createGame('cameroon','16:00','brazil')
              )
