<?php include("cabecalho.php");?>
	

	<div class="container">
		<div class="principal">
			<h1 class="alert-success">removido com sucesso</h1>
			<div class="btn" style="font-size: 2em;"> 
			<a href="lista.php" class="badge badge-primary">voltar a lista de produtos</a>
			</div>
		</div>
	</div>

<?php 

$id = $_POST["id_R"];



$remove = "delete from produtos where id = '{$id}'";
$conexao = mysqli_connect('localhost', 'root', '', 'test');


$mysqli = mysqli_query($conexao, $remove);
if (!$mysqli)
	$mensage = mysqli_error($conexao);
?>

<?php include("rodape.php") ?>