# cx-devx-learn-ms
DevX Learning App Backend Server

## Search by Text in MongoDB

### Create Index in command prompt

 >> db.courses.createIndex({title:"text"}); // ERROR in create from nestJS,

 - "text" will be the name of index we created,
 - We will search from name and displayName field here

 >> db.courses.find({$text:{$search: "graphql"}})
