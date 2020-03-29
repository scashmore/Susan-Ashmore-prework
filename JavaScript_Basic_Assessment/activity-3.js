var student_names = ['Victoria', 'Chris', 'Ray']

for (let i = 0; i < 3; i++){
    const name = prompt('Enter 3 names');
    student_names.push(name);
}
for (let i = 0; i < student_names.length; i++) {
    console.log(student_names[i]);
}