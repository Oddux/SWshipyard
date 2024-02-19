import { gql } from '@apollo/client';

const getAllShips = gql`
query getAllShips {
    allStarships {
        starships {
          id
          name
          model
          starshipClass
          manufacturers
          crew
          passengers
          maxAtmospheringSpeed
          MGLT
          hyperdriveRating
          consumables
          cargoCapacity
          length
        }
      }
    }`;

export {getAllShips};