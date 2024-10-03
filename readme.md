# SLIDE BUTTON

Botão deslizante de 2 estados.

## Vídeo demonstrativo

![Vídeo demonstrativo.](https://github.com/siaelalves/slide-button-css/blob/d5a6822fc0ed8e1ebfe97e96de697f12774e611f/slide-button-view.webm)

## Como implementar em seu projeto

1. Copie o código HTML do botão para o seu projeto:

 ~~~html
<button class="slideButton off" onClick="toggleActivate();">
  <div class="slider off"></div>
 </button>
~~~

2. Copie o arquivo slide-button.css para a sua pasta de estilos;

3. Copie o arquivo slide-button.js para a sua pasta de scripts;

4. Faça a inclusão da folha de estilo:

~~~html
<link rel="stylesheet" href="slide-button.css">
~~~

5. Faça a inclusão do script de preferência no final da tag body

~~~html
<script src="slide-button.js"></script>
~~~

## Identificação das partes

![Identificação das partes do projeto.](https://github.com/siaelalves/slide-button/slide-button-part-names.png)

## Como funciona

O elemento **button.slideButton** possui um evento **onClick** que aciona a função **toggleActivate( )** que está dentro do script.

A função **toggleActivate( )** procura pelos elementos **button.slideButton** e pelo elemento **div.slider** e os salva nas variáveis *button* e *slider* respectivamente.

Antes de realizar a ativação ou desativação do botão propriamente dita, a função **toggleActivate( )** aguardará um tempo especificado em milissegundos na variável **loadingTime**. Esse tempo pode ser usado pelo desenvolvedor para realizar alguma ação no back-end e garantir que o estado do botão reflita o estado real da configuração à qual ele se refere.

Finalizado o intervalo, verifica a existência da classe **off** dentro do elemento *button*. Caso ela exista, ele a remove a adiciona a classe *on* como substituta. Faz o mesmo com o elemento *slider* e finaliza a função.

Na segunda parte da função, ele realiza a mesma operação, mas dessa vez verificando a existência da classe **on** dentro do elemento *button*.

É necessário retornar a função no meio porque, ao alterar a classe do elemento *button*, a segunda condição se tornará verdadeira e fará com que o elemento *button* retorne a posição inicial e o efeito slide não terá efeito algum.

## Sobre a folha de estilos

Note que o padrão usado para a folha de estilos é o aninhamento, onde os elementos inferiores ficam aninhados nos elementos superiores. A estrutura básica é:

- button.slideButton,button.slideButton *
- button
> slider
> slider.off
> slider.on
- button.slideButton.on
- button.slideButton.readonly,.slider.readonly

As variáveis da folha de estilos são interdependentes. Para personalizar o botão, basta alterar as variáveis que possuem valores diretos, como 48px, 5px, etc. Não há necessidade de modificar as variáveis cujos valores são resultado de um cálculo usando outras variáveis.

A folha de estilos usa o seguinte padrão de nomenclatura.

- Variáveis terminadas com "**button**": *Referem-se às propriedades da trilha por onde percorre o slider. São 3 as variáveis **button***:

1) height-button
2) width-button
3) shadow-button

- Variáveis terminadas com "**slider**": *Referem-se às propriedades do slider. São 7 as variáveis **slider***:

1) width-slider
2) height-slider
3) margin-slider
4) margin-slider
5) off-position
6) on-position
7) speed-slider
8) shadow-slider
9) color-slider

- Variáveis que começam com "**color**": *Dizem respeito à paleta de cores utilizadas pelo projeto. São 3 as variáveis **color***:

1) color-inactive
2) color-active
3) color-slider