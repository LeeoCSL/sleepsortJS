console.log("Sleep Sort");

const vetor = [];

ordenar = () => {
  console.log("inicio ordenação");
  for (let i = 0; i < vetor.length; i++) {
    setTimeout(() => {
      console.log(vetor[i]);
    }, vetor[i]);
  }
};

populaVetor = () => {
  for (let i = 0; i < 20; i++) {
    vetor[i] = Math.floor(Math.random() * 100);
  }
  console.log(vetor);
};

populaVetor();
ordenar();
