function createMenu() {
  var menu = [
    [0, '', 'Documentation'],
    [1, 'gettingstarted', 'Getting Started'],
    [1, 'general', 'General'],
    [1, 'system', 'System'],
    [1, 'cpu', 'CPU'],
    [1, 'memory', 'Memory'],
    [1, 'battery', 'Battery'],
    [1, 'filesystem', 'Disks / FS'],
    [1, 'graphics', 'Graphics'],
    [1, 'os', 'OS'],
    [1, 'network', 'Network'],
    [1, 'processes', 'Processes / Services'],
    [1, 'docker', 'Docker'],
    [0, '', 'More'],
    [1, 'history', 'Version history'],
    [1, 'issues', 'Known Issues'],
    [1, 'statsfunctions', 'Stats Functions'],
    [1, 'copyright', 'Copyright & License'],
    [1, 'contributors', 'Contributors'],
    [1, 'trademarks', 'Trademarks'],
  ];

  var path = window.location.pathname;
  var page = path.split('/').pop().replace('.html', '');

  var menuParent = document.getElementById('menu');
  var titleElement;
  var ulElement;
  var hrElement;
  var liElement;
  var aElement;
  for (let item of menu) {
    if (item[0] === 0) {
      titleElement = document.createElement('div');
      titleElement.classList.add('title');
      titleElement.innerText = item[2];
      menuParent.appendChild(titleElement);
      hrElement = document.createElement('hr');
      titleElement.appendChild(hrElement);
      ulElement = document.createElement('ul');
      titleElement.appendChild(ulElement);
    } else {
      liElement = document.createElement('li');
      if (page === item[1]) {
        liElement.classList.add('active');
      }
      aElement = document.createElement('a');
      aElement.setAttribute('href', item[1] + '.html');
      aElement.innerText = item[2];
      ulElement.appendChild(liElement);
      liElement.appendChild(aElement);
    }
  }
}
