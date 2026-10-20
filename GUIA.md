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
| As 3 páginas | `aviso`, `botao-inicio`, `botao-sobre`, `botao-niveis`, `lista-niveis`, `contador-carrinho` |
| index.html | `secao-destaques`, `mais-vendidos`, `conheca-niveis`, `secao-nivel`, `titulo-nivel`, `grade-produtos` |
| produto.html | `detalhe-produto` |
| carrinho.html | `lista-carrinho`, `total-carrinho`, `botao-comprar` |

Também não muda:

- o `<div id="aviso">` no começo do `body` e o `<script src="js/Script.js">` no final
- o `<footer>` (o botão "Sobre" desce até ele)
- o nome dos arquivos `produto.html` e `carrinho.html` (os links usam esses nomes)
- o `hidden` da `secao-nivel` (ela começa escondida)

### Um toque

A linha do `meta` lá no começo do index tá com uma vírgula a mais. O certo seria:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Pedro: //odeio roscax gulosas

### 1. Duas coisas que precisam ficar escondidas

O JS coloca e tira essas classes, mas quem esconde e mostra é o CSS:

```css
#lista-niveis { display: none; }
#lista-niveis.aberta { display: block; }

#aviso { display: none; }
#aviso.visivel { display: block; }
```

Sem isso, a lista de níveis fica sempre aberta e o aviso nunca some.

### 2. A cor do nível

Quando a pessoa escolhe um nível, o JS troca a variável `--cor-nivel`. É só usar `var(--cor-nivel)` onde tu quiser que a cor mude (header, títulos, botões...).

Coloca no `:root` a cor padrão e a cor do Level 4, que tá faltando:

```css
--cor-nivel: var(--Level-0);
--level-office: #5b7089;
```

Se quiser mudar mais coisa por nível, o `body` ganha o nível escolhido:

```css
body[data-nivel="level-37"] { ... }
```

Os outros são `level-run`, `level-fun`, `level-1` e `level-4`.

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
| Card de nível | `card-nivel` (ele tem a cor do nível em `var(--cor-card)`) |
| Página do produto | `detalhe-nivel`, `detalhe-descricao`, `detalhe-preco`, `detalhe-estoque`, `detalhe-botao` |
| Carrinho | `item-carrinho`, `item-preco`, `item-menos`, `item-quantidade`, `item-mais`, `item-subtotal`, `item-remover`, `carrinho-vazio` |

As imagens dos produtos são SVG, então ficam boas em qualquer tamanho.
