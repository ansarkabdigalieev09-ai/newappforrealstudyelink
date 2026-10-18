// Расписание деректері (Истфак 1 және 2 топ)
const scheduleData = [
    // 2-ТОП
    { day: 'Дүйсенбі', time: '08:30 - 09:20', name: 'Шетел тілі 1', teacher: 'Утарова А.Г.', room: 'Корп 3, ауд 303', type: '-P', group: '2' },
    { day: 'Дүйсенбі', time: '09:30 - 10:20', name: 'Шетел тілі 1', teacher: 'Утарова А.Г.', room: 'Корп 3, ауд 303', type: '-P', group: '2' },
    { day: 'Дүйсенбі', time: '10:30 - 11:20', name: 'Религиоведение', teacher: 'Куспанова А.Ж.', room: 'Корп 3, Акт.зал', type: '-L', group: '2' },
    { day: 'Дүйсенбі', time: '11:40 - 12:30', name: 'Религиоведение', teacher: 'Куспанова А.Ж.', room: 'Корп 3, Акт.зал', type: '-L', group: '2' },
    { day: 'Дүйсенбі', time: '12:40 - 13:30', name: 'Археология', teacher: 'Сагидуллаев Д.З.', room: 'Корп 3, ауд 408', type: '-L', group: '2' },
    { day: 'Дүйсенбі', time: '13:40 - 14:30', name: 'Древние цивилизации', teacher: 'Журасова А.Ш.', room: 'Корп 3, ауд 408', type: '-L', group: '2' },
    { day: 'Дүйсенбі', time: '14:50 - 15:40', name: 'Древние цивилизации', teacher: 'Журасова А.Ш.', room: 'Корп 3, ауд 201', type: '-L', group: '2' },
    
    { day: 'Сейсенбі', time: '08:30 - 09:20', name: 'История Казахстана', teacher: 'Сабыргалиева Н.Б.', room: 'Корп 3, Акт.зал', type: '-L', group: '2' },
    { day: 'Сейсенбі', time: '09:30 - 10:20', name: 'История Казахстана', teacher: 'Сабыргалиева Н.Б.', room: 'Корп 3, Акт.зал', type: '-L', group: '2' },
    { day: 'Сейсенбі', time: '10:30 - 11:20', name: 'Археология', teacher: 'Сагидуллаев Д.З.', room: 'Корп 3, ауд 408', type: '-L', group: '2' },
    { day: 'Сейсенбі', time: '11:40 - 12:30', name: 'Археология', teacher: 'Сагидуллаев Д.З.', room: 'Корп 3, ауд 402', type: '-P', group: '2' },
    { day: 'Сейсенбі', time: '12:40 - 13:30', name: 'Древние цивилизации', teacher: 'Майманова Н.Н.', room: 'Корп 3, ауд 402', type: '-P', group: '2' },

    { day: 'Сәрсенбі', time: '09:00 - 09:50', name: 'История Казахстана', teacher: 'Сабыргалиева Н.Б.', room: 'Корп 7, ауд 306', type: '-P', group: '2' },
    { day: 'Сәрсенбі', time: '10:00 - 10:50', name: 'Религиоведение', teacher: 'Куспанова А.Ж.', room: 'Корп 7, ауд 322', type: '-P', group: '2' },
    { day: 'Сәрсенбі', time: '12:10 - 13:00', name: 'Физическая культура 1', teacher: 'Базартаев Т.А.', room: 'Корп 7, С/зал №1', type: '-P', group: '2' },
    { day: 'Сәрсенбі', time: '13:10 - 14:00', name: 'Физическая культура 1', teacher: 'Базартаев Т.А.', room: 'Корп 7, С/зал №1', type: '-P', group: '2' },

    { day: 'Бейсенбі', time: '10:00 - 10:50', name: 'Казахский (русский) язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 6, ауд 12', type: '-P', group: '2' },
    { day: 'Бейсенбі', time: '11:10 - 12:00', name: 'Казахский (русский) язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 6, ауд 12', type: '-P', group: '2' },

    { day: 'Жұма', time: '10:00 - 10:50', name: 'Физическая культура 1', teacher: 'Базартаев Т.А.', room: 'Корп 7, С/зал №1', type: '-P', group: '2' },
    { day: 'Жұма', time: '11:10 - 12:00', name: 'Физическая культура 1', teacher: 'Базартаев Т.А.', room: 'Корп 7, С/зал №1', type: '-P', group: '2' },
    { day: 'Жұма', time: '12:10 - 13:00', name: 'Казахский (русский) язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 7, ауд 405', type: '-P', group: '2' },
    { day: 'Жұма', time: '13:10 - 14:00', name: 'Казахский (русский) язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 7, ауд 405', type: '-P', group: '2' },

    // 1-ТОП 
    { day: 'Дүйсенбі', time: '08:00 - 08:50', name: 'Казахский язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 6, ауд 12', type: '-P', group: '1' },
    { day: 'Дүйсенбі', time: '09:00 - 09:50', name: 'Казахский язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 6, ауд 12', type: '-P', group: '1' },
    { day: 'Сәрсенбі', time: '11:10 - 12:00', name: 'Шетел тілі 1', teacher: 'Утарова А.Г.', room: 'Корп 6, ауд 10', type: '-P', group: '1' },
    { day: 'Сәрсенбі', time: '13:40 - 14:30', name: 'Казахский язык 1', teacher: 'Альмурзина С.С.', room: 'Корп 3, ауд 403', type: '-P', group: '1' },
    { day: 'Бейсенбі', time: '14:20 - 15:10', name: 'Шетел тілі 1', teacher: 'Утарова А.Г.', room: 'Корп 7, ауд 321', type: '-P', group: '1' }
];

let currentGroup = '2';
let currentDay = 'Дүйсенбі';

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId + '-tab').classList.add('active');
    event.target.classList.add('active');
}

function switchGroup(group) {
    currentGroup = group;
    document.getElementById('groupStatusText').innerText = group === 'all' ? 'Барлық топтар' : `Истфак • ${group}-топ`;
    renderSchedule();
}

function filterDay(day) {
    currentDay = day;
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderSchedule();
}

function renderSchedule() {
    const container = document.getElementById('scheduleContainer');
    container.innerHTML = '';
    
    const filtered = scheduleData.filter(item => {
        const matchesDay = item.day === currentDay;
        const matchesGroup = currentGroup === 'all' || item.group === currentGroup;
        return matchesDay && matchesGroup;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="glass-card">Бұл күні сабақ жоқ 🎉</div>`;
        return;
    }

    filtered.forEach(item => {
        container.innerHTML += `
            <div class="glass-card lesson-card">
                <small style="color:var(--accent-color)">${item.time} • ${item.type === '-L' ? 'Лекция' : 'Практика'} (${item.group}-топ)</small>
                <h4>${item.name}</h4>
                <p>👤 ${item.teacher}</p>
                <p>📍 ${item.room}</p>
            </div>
        `;
    });
}

// Timer
let timer;
let timeLeft = 1500;
let isRunning = false;

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
    } else {
        timer = setInterval(() => {
            timeLeft--;
            let m = Math.floor(timeLeft / 60);
            let s = timeLeft % 60;
            document.getElementById('timerDisplay').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
            if (timeLeft <= 0) clearInterval(timer);
        }, 1000);
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500;
    document.getElementById('timerDisplay').innerText = "25:00";
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

// Init
renderSchedule();