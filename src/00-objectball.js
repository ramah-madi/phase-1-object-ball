const gameObject = () => {
    return {
       home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: { 
            "Alan Anderson": {
                   "number": 0,
                   "shoe": 16,
                   "points": 22,
                   "rebounds": 12,
                   "assists": 12,
                   "steals": 3,
                   "blocks": 1,
                   "slamDunks": 1 },
            "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7 
                   },
            "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15 
                   },
            "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5 
                   },
            "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1 
        }

        },
    },

       away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: { 
        "Jeff Adrien":{
            "number": 4,
            "shoe": 18,
            "points": 10,
            "rebounds": 1,
            "assists": 1,
            "steals": 2,
            "blocks": 7,
            "slamDunks": 2,
        },

        "Bismak Biyombo":{
            "number": 0,
            "shoe": 16,
            "points": 12,
            "rebounds": 4,
            "assists": 7,
            "steals": 7,
            "blocks": 15,
            "slamDunks": 10,
        },
        "DeSagna Diop":{
            "number": 2,
            "shoe": 14,
            "points": 24,
            "rebounds": 12,
            "assists": 12,
            "steals": 4,
            "blocks": 5,
            "slamDunks": 5,
        },
        "Ben Gordon":{
            "number": 8,
            "shoe": 15,
            "points": 33,
            "rebounds": 3,
            "assists": 2,
            "steals": 1,
            "blocks": 1,
            "slamDunks": 0,
        },
        "Brendan Haywood":{
            "number": 33,
            "shoe": 15,
            "points": 6,
            "rebounds": 12,
            "assists": 12,
            "steals": 22,
            "blocks": 5,
            "slamDunks": 12,
        }
       },
    },
}
}

const homePlayers = gameObject()['home']['players'];
const awayPLayers = gameObject()['away']['players'];


const numPointsScored = (playerName) => {
  
    for(let player in homePlayers){
        if(playerName === player){
              return homePlayers[player]['points'] 
        }
      }
     for(let player in awayPLayers){
             if(playerName === player){
                  return awayPLayers[player]['points']
             }
         }
}

console.log(numPointsScored("Brendan Haywood"))

const shoeSize = (playerName) => { 
    for(let player in homePlayers){
        if(playerName === player){
              return homePlayers[player]['shoe'] 
        }
      }
     for(let player in awayPLayers){
             if(playerName === player){
                  return awayPLayers[player]['shoe']
             }
         }
}
console.log(shoeSize("Brendan Haywood"))

const teamColors = (teamName) => { 
    for(let team in gameObject()){
        if(teamName === team['teamName']){
              return gameObject()['home']['colors'] 
        }
     else {
            return gameObject()['away']['colors']
     }
      }
    }
console.log(teamColors("Charlotte Hornets"))

const teamNames = () => {
    let teams = []
    for(let team in gameObject()) {
      teams.push(gameObject()[team]['teamName'])
    }
    return teams
}

console.log(teamNames())

const playerNumbers = (teamName) => { 
    let numbers = []
    
        if(teamName === gameObject()['home']['teamName']){
                for(let player in homePlayers){
                    numbers.push(homePlayers[player]['number'])
                }
                return numbers
        }
        else {
            for(let player in awayPLayers){
                numbers.push(awayPLayers[player]['number'])
            }
            return numbers
        }
      }

console.log(playerNumbers("Charlotte Hornets"))

const playerStats = (playerName) => { 
    for(let player in homePlayers){
        if(playerName === player){
              return homePlayers[player] 
        }
      }
     for(let player in awayPLayers){
             if(playerName === player){
                  return awayPLayers[player]
             }
         }
}

console.log(playerStats("Brendan Haywood"))

const bigShoeRebounds = () => { 
    let max = Number.NEGATIVE_INFINITY;
    let rebounds;
    for(let players in homePlayers){
        if(homePlayers[players]['shoe'] > max){
            max = homePlayers[players]['shoe']
            rebounds = homePlayers[players]['rebounds']
        }
    }
    for(let players in awayPLayers){
        if(awayPLayers[players]['shoe'] > max){
            max = awayPLayers[players]['shoe']
            rebounds = awayPLayers[players]['rebounds']
        }
    }
    return rebounds
}

console.log(bigShoeRebounds())

const mostPointsScored = () => {
    let maxPoints = Number.NEGATIVE_INFINITY;
    let playerWithMaxPoints =""
    for(let players in homePlayers){
        if(homePlayers[players]['points'] > maxPoints){
            maxPoints = homePlayers[players]['points']
            playerWithMaxPoints = players
        }
    }
    for(let players in awayPLayers){
        if(awayPLayers[players]['points'] > maxPoints){
            maxPoints = awayPLayers[players]['points']
            playerWithMaxPoints = players

        }
    }
    return playerWithMaxPoints
}
console.log(mostPointsScored())

const winningTeam = () => {
    let maxPoints = Number.NEGATIVE_INFINITY;
    let teamNameWithMaxPoints =""
    for(let players in homePlayers){
        if(homePlayers[players]['points'] > maxPoints){
            maxPoints = homePlayers[players]['points']
            teamNameWithMaxPoints = gameObject()['home']['teamName']
        }
    }
    for(let players in awayPLayers){
        if(awayPLayers[players]['points'] > maxPoints){
            maxPoints = awayPLayers[players]['points']
            teamNameWithMaxPoints = gameObject()['away']['teamName']

        }
    }
    return teamNameWithMaxPoints
}

console.log(winningTeam())

const playerWithLongestName = () => {
    let maxLength = Number.NEGATIVE_INFINITY;
    let playerWithMaxLength
    for(let players in homePlayers){
        if(players.length > maxLength){
           maxLength = players.length
           playerWithMaxLength = players
        }
    }
    for(let players in awayPLayers){
        if(players.length > maxLength){
            maxLength = players.length
            playerWithMaxLength = players
        }
    }
    return playerWithMaxLength
}

console.log(playerWithLongestName())

const doesLongNameStealATon = () => {
     const maxNameLength = playerWithLongestName()

     let maxSteal = Number.NEGATIVE_INFINITY;
    for(let players in homePlayers){
        if(homePlayers[players]['steals'] > maxSteal){
            maxSteal = homePlayers[players]['steals']
            if(players === maxNameLength) {
                return true
            }
           
            
        }
    }
    for(let players in awayPLayers){
        if(awayPLayers[players]['steals'] > maxSteal){
            maxSteal = awayPLayers[players]['steals']
            if(players === maxNameLength) {
                return true
            }
           
        }
    }
    return false
    
}

console.log(doesLongNameStealATon())