# Data Generation Toolkit Documents Library

This site will be the home for published documents by the Data Generation Toolkit project (at least until we decide to use something different). Currently this is placeholder content and does not need to be kept (although the directions below should probably be migrated to some other location if they aren't kept on the index page or if the index page gets really big).

## To add content to this site:

1. Clone the [Data Generation Toolkit])(https://github.com/SFDO-Community-Sprints/DataGenerationToolkit) repository.
1. Create a new branch in your local copy for your new work: `git switch -c documentation/my-new-content` (please try to use something more descriptive than "my-new-content" you are looking for a short description that helps others know what to expect).
1. Create a new file in the repository `docs` directory. The file should be a [Github flavored Markdown](https://github.github.com/gfm/) file (like this file is). When naming your file remember that spaces and puncutation characters can be challenging to deal with. You can add folders as well if that will help.
1. Add your content to that file.
1. Stage you changes in git: `git add docs/myFile.md`
1. Commit your changes to git: `git commit -m "Adding great new content"` (your comment should be short and help others know what you did).
1. Push your changes back to Github: `git push --set-upstream origin documentation/my-new-content` (after you do the first push of your branch, later pushes can just use `git push`).
1. [Go to Github]((https://github.com/SFDO-Community-Sprints/DataGenerationToolkit) ) and open a Pull Request (there should be a button on the project page to get you started). Someone else on the project team will review your changes and either request a few edits or merge your changes. If they request changes you just need to repeat steps 4-7 (just using `git push` once done) to make the needed fixes.
1. Once the changes are merged into the main branch Github will update the site and push your content there.
