getProject()
getSkill()

function getProject(){
  $.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/isis1234/portfolio/master/Projects.json",
  })
  .done(function( data ) {
    let projects = JSON.parse(data)
    projects = projects.sort(function (a, b) {
      return b.project_date - a.project_date
    })

    // Recent Project 1
    let project_1 = projects[0]
    if(project_1){
      $("#recent_project_1 article.portfolio-item div.entry-media img").attr('src',project_1.preview_image)
      $("#recent_project_1 article.portfolio-item div.entry-content-wrapper h2 a").text(project_1.title)
    }else{
      $("#recent_project_1").attr('hidden', true)
    }

    // Recent Project 2
    let project_2 = projects[1]
    if(project_2){
      $("#recent_project_2 article.portfolio-item div.entry-media img").attr('src',project_2.preview_image)
      $("#recent_project_2 article.portfolio-item div.entry-content-wrapper h2 a").text(project_2.title)
    }else{
      $("#recent_project_2").attr('hidden', true)
    }

    // Recent Project 3
    let project_3 = projects[2]
    if(project_3){
      $("#recent_project_3 article.portfolio-item div.entry-media img").attr('src',project_3.preview_image)
      $("#recent_project_3 article.portfolio-item div.entry-content-wrapper h2 a").text(project_3.title)
    }else{
      $("#recent_project_3").attr('hidden', true)
    }

    // Recent Project 4
    let project_4 = projects[3]
    if(project_4){
      $("#recent_project_4 article.portfolio-item div.entry-media img").attr('src',project_4.preview_image)
      $("#recent_project_4 article.portfolio-item div.entry-content-wrapper h2 a").text(project_4.title)
    }else{
      $("#recent_project_4").attr('hidden', true)
    }

    // Set view more project
    $("#view_more_project").attr('hidden', !(projects.length > 4))
  })
}

function getSkill(){
  $.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/isis1234/portfolio/master/Skills.json",
  })
  .done(function( data ) {
    let skills = JSON.parse(data)
    skills = skills.sort(function (a, b) {
      return b.tag.length - a.tag.length
    })
    console.log(skills)
  })
}