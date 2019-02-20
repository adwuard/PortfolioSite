var json = $.getJSON("repos.json");


jQuery.githubUser = function (username, callback) {
    // jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
    // jQuery.getJSON("/repos.json", callback);

};

//https://api.github.com/users/adwuard/repos

jQuery.fn.loadRepositories = function (username) {
    this.html("<span>Querying GitHub for " + username + "'s repositories...</span>");
    console.log("In func");

    // $.githubUser(username, function (data) {
        data = json.responseJSON;
        console.log(data);

        var gitPanel = document.getElementById("projectPanel");

        for (var i = 0; i <= data.length; i++) {

            // var repoName = data.data[i].name;
            // var description = data.data[i].description;
            // var pushedAt = data.data[i].pushed_at.split("T");
            // var watchers = data.data[i].watchers_count;
            // var forks = data.data[i].forks_count;
            // var defaultBranch = data.data[i].default_branch;
            // var url =data.data[i].html_url;


            var repoName = data[i].name;
            var description = data[i].description;
            var pushedAt = data[i].pushed_at.split("T");
            var watchers = data[i].watchers_count;
            var forks = data[i].forks_count;
            var defaultBranch = data[i].default_branch;
            var url =data[i].html_url;

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
            gitRepo.setAttribute('style', 'max-width: 18rem;');


        //

            var header = document.createElement("div");
            header.setAttribute('class', 'card-header');
            header.innerHTML = "<a href= \"" + url + "\" target=\"_blank\"><u>"+repoName+"</u></a>";

            var repoDescription = document.createElement("div");
            repoDescription.setAttribute('class', 'card-body');

            if (description === null){
                description="No Description";
            }

            repoDescription.innerHTML = "<small>"+description+"</small>";



            var committime = document.createElement("label");
            committime.setAttribute('class','badge mt-4');
            committime.innerHTML = " <div class='container' style='bottom:2px; position: absolute;'> <i class=\"material-icons\"  style=\"font-size:16px;\">update</i> <span><small><strong>"+ defaultBranch+"</strong> branch: " + pushedAt[0] +"</small></span></div>";


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

        // var repos = data.data[0].full_name;

        // console.log(repos);
        // sortByNumberOfWatchers(repos);
        //
        // var list = $('<dl/>');
        // target.empty().append(list);
        // $(repos).each(function() {
        //     list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
        //     list.append('<dd>' + this.description + '</dd>');
        // });
    // });

    function sortByNumberOfWatchers(repos) {
        repos.sort(function (a, b) {
            return b.watchers - a.watchers;
        });
    }
};