##### Running this Project
 1. Install npm packages using "npm install" command.
 2. Configure MySQL DB Configuration as per yours in "indes.js" file.
 3. There is a "db.sql" file in "backend" folder, which you can import for table architect.
 4. Run by "node index.js" command.
 5. Below is the api details:

 Request : POST
 URL: localhost:4000/tasks
 body: (raw json)
 {
	"project_name":"test",
	"project_description":"test1",
	"task_name":"test2",
	"task_description":"test3"
}
 