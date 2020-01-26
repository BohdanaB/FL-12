const structure = [{
        'folder': true,
        'title': 'Films',
        'children': [{
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [{
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [{
            'folder': true,
            'title': 'EPAM Homework answers',
            'children': null
        }]
    }
];

const rootNode = document.getElementById('root');

let j = '';
j += '<ul id="myList">' +
    '<li><span class="level"><i class="material-icons"  style="color:#cfab4a;" onmouseup="mUp(this)">folder</i>' +
          structure[0]['title'] + '</span>' +
    '<ul class="nested">' +
    '<li><i class="material-icons" style="color:#91908c;">insert_drive_file</i>' + 
          structure[0]['children'][0]['title'] + '</li>' +
    '<li><span class="level"><i class="material-icons" style="color:#cfab4a;" onmouseup="mUp(this)">folder</i>' + 
          structure[0]['children'][1]['title'] + '</span>' +
    '<ul class="nested">' +
    '<li><i class="material-icons" style="color:#91908c;">insert_drive_file</i>' +
          structure[0]['children'][1]['children'][0]['title'] + '</li>' +
    '<li><span class="level"><i class="material-icons" style="color:#cfab4a;" onmouseup="mUp(this)">folder</i>' + 
          structure[0]['children'][1]['children'][1]['title'] + '</span>' +
    '<ul class="nested">' +
    '<li><i>Folder is empty</i></li>' +
    '</ul>' +
    '</li>' +
    '</ul>' +
    '</li>' +
    '</ul>' +
    '</li>' +
    '</ul>' +
    '<ul id = "myList2">' +
    '<li><span class = "level"><i class="material-icons" style="color:#cfab4a"; onmouseup="mUp(this)">folder</i>' + 
          structure[1]['title'] + '</span>' +
    '<ul class = "nested">' +
    '<li><span class = "level"><i class="material-icons" style="color:#cfab4a"; onmouseup="mUp(this)">folder</i>' + 
           structure[1]['children'][0]['title'] + '</span>' +
    '<ul class="nested">' +
    '<li><i>Folder is empty</i></li>' +
    '</ul>' +
    '</li>' +
    '</ul>' +
    '</li>' +
    '</ul>'


rootNode.innerHTML = j;

let toggler = document.getElementsByClassName('level');
let i;
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function() {
        this.parentElement.querySelector('.nested').classList.toggle('active');
    });
}

function mUp(obj) {
    obj.innerHTML = 'folder_open';
}