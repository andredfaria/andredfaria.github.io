<?php 
include("cabecalho.php")
?>

<center><h1 class="btn-sucesses">Olá...</h1></center>
<div class="container">
	<div class="row"> 
	<form action="enviar.php" method="POST" class="form-group">
		
			<label class="h3">
				Nome: 
				<input class="form-control" type="text" name="nome"><br>
				Preço:
				<input class="form-control" type="number" name="preco"><br>
				codigo:
				<input class="form-control" type="number" name="codigo"><br>
				<input class="form-control" type="submit" value="enviar"> 
			</label> 
		
	</form>
	</div>
</div>

<?php include("rodape.php")?>