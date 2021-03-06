// var json = $.getJSON("repos.json");

jQuery.githubUser = function (username, callback) {
    jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
};

//https://api.github.com/users/adwuard/repos

jQuery.fn.loadRepositories = function (username) {
    this.html("<span>Querying GitHub for " + username + "'s repositories...</span>");
    $.githubUser(username, function (data) {
        // data = json.responseJSON;
        console.log(data);

        var gitPanel = document.getElementById("projectPanel");

        for (var i = 0; i <= data.data.length; i++) {

            var repoName = data.data[i].name;
            var description = data.data[i].description;
            var pushedAt = data.data[i].pushed_at.split("T");
            var watchers = data.data[i].watchers_count;
            var forks = data.data[i].forks_count;
            var defaultBranch = data.data[i].default_branch;
            var url =data.data[i].html_url;
            var lang = data.data[i].language;


            // var repoName = data[i].name;
            // var description = data[i].description;
            // var pushedAt = data[i].pushed_at.split("T");
            // var watchers = data[i].watchers_count;
            // var forks = data[i].forks_count;
            // var defaultBranch = data[i].default_branch;
            // var url =data[i].html_url;

            //
            // console.log(repoName);
            // console.log(description);
            // console.log(pushedAt);
            // console.log(watchers);
            // console.log(forks);
            // console.log("====================");


            // <div class="card bg-light col-sm mb-4 ml-4 " style="max-width: 18rem;">
            //         <div class="card-header">Header</div>
            //         <div class="card-body">
            //         <h5 class="card-title">Light card title</h5>
            //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            // </div>
            // </div>

            var gitRepo = document.createElement("div");
            gitRepo.setAttribute('class', 'card bg-light mb-4 ml-4');
            gitRepo.setAttribute("style", "width: 18rem; height: 18rem;");
            // gitRepo.setAttribute('style', '');


            var header = document.createElement("div");
            header.setAttribute('class', 'card-header');
            header.innerHTML = "<a href= \"" + url + "\" target=\"_blank\"><u>"+repoName+"</u></a>";

            var repoDescription = document.createElement("div");
            repoDescription.setAttribute('class', 'card-body');

            if (description === null){
                description="No Description";
            }

            repoDescription.innerHTML ="<label style='color: royalblue; font-size: 12px'> [ "+ lang +" ]</label></br><small>"+description+"</small>";


            var committime = document.createElement("label");
            committime.setAttribute('class','mt-4');
            committime.innerHTML = " <div class='container' style='bottom:2px;'> <i class=\"material-icons\"  style=\"font-size:16px; display: inline; \">update</i> <span><small><strong>"+ defaultBranch+"</strong> branch: " + pushedAt[0] +"</small></span></div>";


            var watchersCount = document.createElement("label");
            committime.setAttribute('class','right');
            watchersCount.innerHTML= "<a class=\"btn disabled rightpart\">Button</a>";

            var forkCount = document.createElement("p");
            forkCount.innerText = forks;


            gitPanel.appendChild(gitRepo);
            gitRepo.appendChild(header);
            // header.appendChild(watchersCount);
            // header.appendChild(watchersCount);
            gitRepo.appendChild(repoDescription);
            gitRepo.appendChild(committime);



        }
    });
};

function readCount(){

    fh = fopen(getScriptPath(), 0); // Open the file for reading

    if(fh!=-1) {

        length = flength(fh); // Get the length of the file
        str = fread(fh, length); // Read in the entire file
        fclose(fh); // Close the file
        // Display the contents of the file
        write(str);

    }

}

