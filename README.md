# Dota 2 LFG

### Dota 2 LFG is a site for finding friends and teammates.

#### Technology

* React / Redux
* Node / Express (with Router) / Mongoose (with [aggregation](https://github.com/flooyd/dota2lfg/blob/master/api/matchStats/index.js#L45))
* JWT / LocalStorage
* CSS3 Flex (Bootstrap for colors and buttons only)
* Heroku (live) and TravisCI (disabled at the moment)
* [steamid](https://www.npmjs.com/package/steamid)
* [passport-steam](https://www.npmjs.com/package/passport-steam)
* [react-cookie](https://www.npmjs.com/package/react-cookie)

#### Features

* Sign in with Steam account using Valve's OAuth
* See summary stats with a link to more
* Create a Group specifying the Heroes you want
* Join a Group by clicking a Hero in one of the Groups below the Group Maker
* More Group management (edit, change Heroes, kick user) and group features (chat, view players' stats) coming soon!

### [Home Page](https://github.com/flooyd/dota2lfg/blob/master/client/src/components/Fountain/fountain.js)
![Home Page](https://github.com/flooyd/dota2lfg/blob/master/readme%20images/Homepage.PNG)
* Self explanatory :smiley:


### [Dota 2 LFG](https://github.com/flooyd/dota2lfg/blob/master/client/src/App.js)
![Dota 2 LFG](https://github.com/flooyd/dota2lfg/blob/master/readme%20images/dota2lfg.PNG)
* React Router is not used since there are just two pages. LocalStorage stores an "onHome" bool which React/Redux uses
  to render either the Home Page or the App

### [Group Maker](https://github.com/flooyd/dota2lfg/blob/master/client/src/components/UserControl/GroupMaker.jsx)
![Group Maker](https://github.com/flooyd/dota2lfg/blob/master/readme%20images/Groupmaker.PNG)
* Appearance changes when a group has not been created yet by the user.
* The Hero Selector (not shown) can be accessed from the Group Maker, allowing you to choose 5 heroes for your group.

### [Mini Profile](https://github.com/flooyd/dota2lfg/blob/master/client/src/components/UserControl/MiniProfile.jsx)
![Mini Profile](https://github.com/flooyd/dota2lfg/blob/master/readme%20images/Miniprofile.PNG)
* The Mini Profile shows your top 3 heroes by total games played in balanced (eg. they count toward matchmaking rating) game types and lobbies.
* Similar stats will be shown for other players in the future.
* Additional future features will be shown here (eg. settings and friends)

### [Created Group](https://github.com/flooyd/dota2lfg/blob/master/client/src/components/Group/Group.jsx)
![Created Group](https://github.com/flooyd/dota2lfg/blob/master/readme%20images/CreatedGroup.PNG)
* Currently, you can only delete your group or choose another hero (eg. join your own group again)
* Future plans include functionaly to manage your group and the users in it.

### [Joined Group](https://github.com/flooyd/dota2lfg/blob/master/client/src/components/Group/Group.jsx)
![Joined Group](https://github.com/flooyd/dota2lfg/blob/master/readme%20images/JoinedGroup.PNG)
* The border colors of the Hero portraits (red, green, blue and white) depend on the Hero's primary stat and who is the group owner.
  There is currently a bug with this :cry: but it will be corrected soon :smiley:
* The visual state of joined groups may be incorrect if joining one group from another. Corrected on refresh. Redux and socket.io will
  be used in the future to create a live feed of groups.
