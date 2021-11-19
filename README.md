This project was created for the gravie developer interview test

It uses Javascript/React and Python/FastAPI

# Setup
## React
You'll need to have the latest npm and all that jazz.
I haven't tested it, but you can probably do `npm install` from within the `game-buster` folder.

## FastAPI
I used Python3. To get FastAPI on my computer I did `python3 -m pip install fastapi["all"]`
This also installs uvicorn which will let you run a server

# Running
## React
`npm start` from `game-buster` folder

## FastAPI
`uvicorn main:app --reload` from `backend` folder

# How far along is it?
- The backend has in memory state, so as long as it's not restarted, it will remember which games have been "rented"
- Able to search using giant bomb api proxied through my backend
- Shows thumbnail and title. Links to giant bomb's detail page
- Can switch over to checkout/cart using React routing so that cart state is remembered. (Cart will not be remembered on refresh.)
- Can checkout games. Next time a checked out game is searched, it will show that it's rented and you won't be able to add to cart.

# Known Bugs
Whenever you add something to your cart, the search page rerenders and you lose the search query you had. To fix it, I think I would use React Context but perhaps that's overkill. Regardless I ran out of time.