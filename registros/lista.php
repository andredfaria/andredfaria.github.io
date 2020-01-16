<?php include("cabecalho.php") ?>

<h1>Lista de produtos</h1>

<?php 
$conexao = mysqli_connect('localhost', 'root', '', 'test');
$resultado = mysqli_query($conexao, "select * from produtos");

?>
<div class="container">
	<!-- <form method="POST" action="remove.php"> -->
	<div class='row'>

		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">Nome</th>
					<th scope="col">Preço</th>
					<th scope="col">Codigo</th>
					<th scope="col">Remover</th>
				</tr>
			</thead>

			<?php 
			while($produto = mysqli_fetch_assoc($resultado)) { ?>

				<tr>

					<td scope="row" >
						<label name="nome" value="<?php echo $produto['nome'] ?>">
							<?php echo $produto['nome'] ?>
						</label>
					</td>
					<td scope="row" >
						<label name="preco" value="<?php echo $produto['preco'] ?>">
							<?php echo $produto['preco'] ?>
						</label>
					</td>
					<td scope="row" class="id_codigo" value="<?php echo $produto['id'] ?>">
						<label name="codigo" value="<?php echo $produto['id'] ?>">
							<?php echo $produto['id'] ?>
						</label>
					</td>
					<td scope="row">
						<form action="remove.php" method="POST" class="form-group">
							<input class="btn btn-danger" value="remover" name="button" type="submit">
							<input value="<?php echo $produto['id'] ?>" name="id_R" type="hidden">
						</form>
					</td>
				</tr>
				<?php
			}
			?>

		</table>
	<!-- </form> -->
	</div>
	<div class='row'>
		<p>Digite o numedo do ID pelo qual quer remover</p><br>
		<form action="remove.php" method="POST" class="form-group">
				<div class="col">
					<input name="id_R" class='form-control' type="text">
				</div>
				<div class="col">
					<input type="submit" class="btn btn-danger" name="btn " value="remover">
				</div>
		</form>
	</div>

</div>

<script type="text/javascript">
	$(document).on("click","#Remover",function() {
		var codigo = $(this).closest('tr').find('.id_codigo').text();
	});
	function remover(e){

	}

</script>
<?php include("rodape.php") ?>