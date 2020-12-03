<?php include('cabecalho.php') ?>
<head>
	<?php 

	$color = $_GET['s'];


	?>
<style type="text/css">
	p{
		background-color: <?php $color ?>
	}
</style>
</head>
<div class="container">
	<form class="" method="GET" action="exercicios.php"> 
	<input type="number" name="numero" class="input-group">numero 1
	<br>
	<input type="submit" name="botao" value="enviar" class="">
	<input type="color" name="s" value="enviar" class="">
	</form>
	<p>
	<?php 
	echo number_format(sqrt(18)); 

	?>
	</p>
</div>

<?php include('rodape.php') ?>