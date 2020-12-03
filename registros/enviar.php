<?php include("cabecalho.php");?>

<?php 
	$nome 	= $_POST["nome"];
	$preco 	= $_POST["preco"];
	$codigo = $_POST["codigo"];

	$insert = "insert into produtos (nome, preco, id) values('{$nome}','{$preco}','{$codigo}')";
	$conexao = mysqli_connect('localhost', 'root', '', 'test');


	$mysqli = mysqli_query($conexao, $insert);
	if (!$mysqli) {
		$mensage = mysqli_error($conexao);
	?>
	 	<div class="container">
	 		<p class="alert-danger text-center">produto <?php echo $nome;?>, <?php echo $preco;?> não foi adicionado <?php echo $conexao; ?></p>
	 	</div>
	 <?php 
	}else{?>
		<div class="container">
			<p class="alert-success text-center">produto <?php echo $nome;?>, <?php echo $preco?> adicionado com sucesso</p>
		</div>
	<?php
	 
	}
	 ?>

</head>
<body>

<?php include("rodape.php") ?>