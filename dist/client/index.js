import { fetchAllPlayers } from './ajaxHelpers'
import { renderAllPlayers, renderNewPlayerForm } from './renderHelpers'

const init = async () => {
  const players = await fetchAllPlayers()
  renderAllPlayers(players)
console.log(players)
  renderNewPlayerForm()
}

init()
