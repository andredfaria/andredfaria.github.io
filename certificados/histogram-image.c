//
//  main.c
//  testprog1
//
//  Created by Jules Pierce on 6/3/15.
//  Copyright (c) 2015 Jules Pierce. All rights reserved.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <math.h>

#include "bmp_io.h"
#include "imgstuff.h"

int main(int argc, char * argv[]) {
    FILE *in_fd;
    unsigned char in_dat[1];
    int byte_count_r[256];
    int byte_count_g[256];
    int byte_count_b[256];
    int i, j;
    double total;
    double prob_r[256], prob_g[256], prob_b[256];
    double mean_r=0;
    double mean_g=0;
    double mean_b=0;
    double mean_sq_r = 0;
    double mean_sq_g = 0;
    double mean_sq_b = 0;
    double count;
    double var_r, var_g, var_b;
    double total_prob_r = 0;
    double total_prob_g = 0;
    double total_prob_b = 0;
    unsigned char *picdat;
    int rows, cols;
    char filename[100];
    int min_r, max_r, min_g, max_g, min_b, max_b;
    double entropy_r, entropy_g, entropy_b;


	if( argc != 4){
		printf("usage is: %s pic_type in.bmp out_filename\n", argv[0] );
		exit(1);
	}
    input_bmp (argv[2], &cols, &rows, &picdat, RGB);
    
    for (i = 0; i < 256; i++) {
        byte_count_r[i] = 0;
        byte_count_g[i] = 0;
        byte_count_b[i] = 0;
    }
    
    min_r = min_g = min_b = 255;
    max_r = max_g = max_b = 0;
    
    for (i = 0; i < rows; i++){
        for (j = 0; j < cols; j++){
            byte_count_r [picdat[ri (i, j, cols)]]++;
            byte_count_g [picdat[gi (i, j, cols)]]++;
            byte_count_b [picdat[bi (i, j, cols)]]++;
            if (picdat [ri(i, j, cols)] < min_r){
                min_r = picdat [ri(i, j, cols)];
            }
            if (picdat [ri(i, j, cols)] > max_r){
                max_r = picdat [ri(i, j, cols)];
            }
            if (picdat [gi(i, j, cols)] < min_g){
                min_g = picdat [gi(i, j, cols)];
            }
            if (picdat [gi(i, j, cols)] > max_g){
                max_g = picdat [gi(i, j, cols)];
            }
            if (picdat [bi(i, j, cols)] < min_b){
                min_b = picdat [bi(i, j, cols)];
            }
            if (picdat [bi(i, j, cols)] > max_b){
                max_b = picdat [bi(i, j, cols)];
            }
        }
    }
    
    total = rows * cols;
    
    sprintf(filename, "%s_m.txt", argv[3]);
    in_fd = fopen(filename, "w");
    for (i=0; i < 256; i++){
        prob_r[i] = byte_count_r[i]/total;
        prob_g[i] = byte_count_g[i]/total;
        prob_b[i] = byte_count_b[i]/total;
        //printf("%d    %f\n", i, prob[i]);
        fprintf(in_fd, "%10.6e    %10.6e    %10.6e    %10.6e\n", (double)i, prob_r[i], prob_g[i], prob_b[i]);
        total_prob_r += prob_r[i];
        total_prob_g += prob_g[i];
        total_prob_b += prob_b[i];
        mean_r += i * prob_r[i];
        mean_g += i * prob_g[i];
        mean_b += i * prob_b[i];
        mean_sq_r += i*i * prob_r[i];
        mean_sq_g += i*i * prob_g[i];
        mean_sq_b += i*i * prob_b[i];
    }
    
    entropy_r = entropy_g = entropy_b = 0;
    for (i = 0; i < 256; i++){
        if (prob_r[i] == 0) continue;
        entropy_r += prob_r [i] * (log (1/prob_r[i])/ log (2));
    }
    for (i = 0; i < 256; i++){
        if (prob_g[i] == 0) continue;
        entropy_g += prob_r [i] * (log (1/prob_g[i])/ log (2));
    }
    for (i = 0; i < 256; i++){
        if (prob_b[i] == 0) continue;
        entropy_b += prob_b [i] * (log (1/prob_b[i])/ log (2));
    }
    var_r = mean_sq_r - mean_r*mean_r;
    var_g = mean_sq_g - mean_g*mean_g;
    var_b = mean_sq_b - mean_b*mean_b;
    //printf ("rows = %d    cols = %d    min = %d    max = %d\n", rows, cols, min, max);
    //printf("total_prob = %lf  mean = %lf var = %lf   entropy = %5.1
           //f bits\n", total_prob, mean, var, entropy);
    
    free (picdat);
    fclose(in_fd);
    
}