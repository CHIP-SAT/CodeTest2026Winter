function get_time(time) {
  const hour = parseInt(time.slice(0, 2), 10) * 3600;
  const minute = parseInt(time.slice(3, 5), 10) * 60;
  const second = parseInt(time.slice(6, 8), 10);
  const millisecond = parseInt(time.slice(9), 10);
  return (hour + minute + second) * 1000 + millisecond;
}

function get_start_time(time, duration_time) {
  const n_time = duration_time.slice(0, -1);
  const int_duration_time = Math.floor(parseFloat(n_time) * 1000);
  return get_time(time) - int_duration_time + 1;
}

function solution(lines) {
  let answer = 0;
  const start_time = [];
  const end_time = [];

  for (const t of lines) {
    const time = t.split(' ');
    start_time.push(get_start_time(time[1], time[2]));
    end_time.push(get_time(time[1]));
  }

  for (let i = 0; i < lines.length; i++) {
    let cnt = 0;
    const cur_end_time = end_time[i];
    for (let j = i; j < lines.length; j++) {
      if (cur_end_time > start_time[j] - 1000) {
        cnt += 1;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}
