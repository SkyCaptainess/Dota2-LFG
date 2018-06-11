Dota 2 LFG

Dota 2 LFG is a site for finding friends to play with.

Everything is still in progress, but here's what I have been working on most recently:

Noting endpoints I'll use from the Open Dota API.

The site will show basic data for the user, such as total # of matches, win/loss percentage for all matches and for individual heroes

The process for getting the user's match history is about 90% complete.

The client has a design them (color palette, layout, etc.). Will be tweaked along the way. The design is extremely simplistic and
I intend for the site to truly be a single page app.

The client has a completed Group Maker that has state managed by Redux.

Client has a "MiniProfile" section to show settings and user's stats noted above

Group component is there but empty. After user creates group, it will be saved in db and served to all users (on load or live with socket.io)

After completing the stat gathering, the Group component as well as the server side aspects for the Group, the MVP will be ready.




This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


