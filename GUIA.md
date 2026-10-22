# Guia do Backstore

O que o JavaScript precisa do HTML e do CSS pra funcionar.

---

## Lorenzzo:

Já tem uma base pronta pra gente conseguir testar o JS:

- **index.html**: um header simples e as seções da página inicial
- **produto.html** e **carrinho.html**: páginas novas, com o mesmo header e o teu footer copiado igualzinho

### Pode mudar à vontade

- textos, ordem dos botões, logo, `div`s, classes pro Pedro estilizar
- o banner (tem um comentário no index marcando onde ele entra)

### Não pode mudar

O JS acha as coisas por esses ids:

| Página | ids |
|---|---|
| As 3 páginas (cabeçalho) | `aviso`, `botao-inicio`, `botao-sobre`, `botao-niveis`, `lista-niveis`, `contador-carrinho` |
| As 3 páginas (rodapé) | `botao-iniciope`, `botao-niveispe`, `contador-carrinho-pe` |
| index.html | `secao-destaques`, `mais-vendidos`, `conheca-niveis`, `secao-nivel`, `titulo-nivel`, `grade-produtos` |
| produto.html | `detalhe-produto` |
| carrinho.html | `lista-carrinho`, `total-carrinho`, `botao-comprar` |

Também não muda:

- o `<div id="aviso">` no começo do `body` e o `<script src="js/Script.js">` no final
- o `<footer>` (o botão "Sobre" desce até ele)
- o nome dos arquivos `produto.html` e `carrinho.html` (os links usam esses nomes)
- o `hidden` da `secao-nivel` (ela começa escondida)

---

## Pedro

### 1. Onde fica cada coisa

| Arquivo | O quê |
|---|---|
| `css/geral.css` | cabeçalho, botões, lista de níveis, aviso e rodapé (as 3 páginas) |
| `css/niveis.css` | as cores de cada nível e os fundos da página inicial |
| `css/inicio.css`, `css/produto.css`, `css/carrinho.css` | uma para cada página |

### 2. A cor do nível

Quando a pessoa escolhe um nível, o JS coloca o nível no `body` (`data-nivel="level-37"`). As cores de cada um ficam no `niveis.css`, em `[data-nivel="..."]`. Os níveis são `level-37`, `level-run`, `level-fun`, `level-1` e `level-4`; sem nível é o Level 0, o tema padrão do `:root`.

### 3. Grades de 5 por linha

```css
#mais-vendidos, #grade-produtos, #conheca-niveis {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
```

### 4. Classes que o JS cria (pode estilizar todas)

| Onde | Classes |
|---|---|
| Lista de níveis | `opcao-nivel` |
| Card de produto | `card-produto`, `card-preco`, `card-botao` |
| Card de nível | `card-nivel` (ele também tem o `data-nivel`, então pega as cores do nível dele) |
| Página do produto | `detalhe-nivel`, `detalhe-descricao`, `detalhe-preco`, `detalhe-estoque`, `detalhe-botao` |
| Carrinho | `item-carrinho`, `item-preco`, `item-menos`, `item-quantidade`, `item-mais`, `item-subtotal`, `item-remover`, `carrinho-vazio` |

As imagens dos produtos são SVG, então ficam boas em qualquer tamanho.
