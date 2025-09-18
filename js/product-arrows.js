window.onload = () => {
new LeaderLine(
  document.getElementById('led-light'),
  document.getElementById('feature_text_1'),
  {
    color: '#212427',
    path: 'fluid',
    size: 3,
    endPlug: 'behind',
    startPlug: 'disc'
  }
);


new LeaderLine(
  document.getElementById('led-light-2'),
  document.getElementById('feature_text_2'),
  {
    color: '#212427',
    path: 'fluid',
    size: 3,
    endPlug: 'behind',
    startPlug: 'disc'
  }
);

new LeaderLine(
  document.getElementById('led-light-3'),
  document.getElementById('feature_text_3'),
  {
    color: '#212427',
    path: 'fluid',
    size: 3,
    endPlug: 'behind',
    startPlug: 'disc'
  }
);


new LeaderLine(
  document.getElementById('led-light-4'),
  document.getElementById('feature_text_4'),
  {
    color: '#212427',
    path: 'fluid',
    size: 3,
    endPlug: 'behind',
    startPlug: 'disc'
  }
);


  const images = ["./images/lumina-removed-bg2.png", "./images/lumina-bag.png"]; 
    let index = 0;

    const mainImage = document.getElementById("mainImage");
    const thumbnail = document.getElementById("thumbnail");
    const prevBtn = document.querySelector(".arrow.left");
    const nextBtn = document.querySelector(".arrow.right");

    function updateImages() {
      mainImage.src = images[index];
      thumbnail.src = images[(index + 1) % images.length]; 
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateImages();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateImages();
    });

    // Klik på thumbnail skifter til det næste billede
    thumbnail.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateImages();
    });

    updateImages();

 
};

