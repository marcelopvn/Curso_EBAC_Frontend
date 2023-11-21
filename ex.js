const aluno = ["Walter", "Murilo", "Julia"];
const resultado = aluno.map(function (itemAtual) {
  return {
    nome: itemAtual,
    nota: "5"
  };
});
const alguemAprovado = resultado.some(function (item) {
  return item.nota == "5";
});
resultado.push({
  nome: "Marcelo",
  nota: "8"
});
resultado.push({
  nome: "Milena",
  nota: "6"
});
const aprovados = resultado.some(function (item) {
  return item.nota >= "6";
});
function Alunoaprovado1(aluno) {
  return aluno.nota >= "6";
}
const AlunoAprovado2 = resultado.filter(Alunoaprovado1);
console.log(AlunoAprovado2);