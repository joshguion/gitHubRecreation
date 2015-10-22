//Profile Picture
$('#profilePic').append("<img src='" + user.avatar_url + "'>");

$('.name').text(user.name);
$('.login').text(user.login);
$('.location').text(user.location);
// $('.joinedOn').text("Joined on " + moment(users.created_at).format("ll"));
$('.followers').text(user.followers);
$('.starred').text(user.starred);
$('.following').text(user.following);


var filteredRepo = "";
var coreRepo = _.each(repo, function(item){
 filteredRepo += '<div class="repoDiv">' + '<span class="repoName">' + item.name + '</span>'
 + '<span class="repoUpdatedAt">' + item.updated_at + '</span>' + '<br>'
 + '<span class="repoLanguage">' + item.language + '</span>' + '<br>'
 + '<span class="repoStargazers">' + item.stargazers_count + '</span>'+ '<br>'
 + '<span class="repoForks">' + item.forks + '</span>'+ '</div>';
});

$('.repo').append(filteredRepo);

//Tabbies
$('.contTab').click(function(event){
  event.preventDefault();
  $('#contInfo').css('display', 'block')
  $('#repoInfo').css('display', 'none')
  $('#pubInfo').css('display', 'none')
});

$('.repoTab').click(function(event){
  event.preventDefault();
  $('#contInfo').css('display', 'none')
  $('#repoInfo').css('display', 'block')
  $('#pubInfo').css('display', 'none')
});

$('.pubTab').click(function(event){
  event.preventDefault();
  $('#contInfo').css('display', 'none')
  $('#repoInfo').css('display', 'none')
  $('#pubInfo').css('display', 'block')
});
