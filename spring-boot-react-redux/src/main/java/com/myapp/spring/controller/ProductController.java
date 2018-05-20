package com.myapp.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.myapp.spring.model.Product;
import com.myapp.spring.repository.ProductRepository;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/api")
public class ProductController {

	@Autowired
    private ProductRepository products;


    @PostMapping(value = "/products/save", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {

        products.save(product);

        return new ResponseEntity<>(product, OK);
    }
    @GetMapping(value = "/products/all", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<List<Product>> findallProduct() {
        return new ResponseEntity<>(products.findAll(), OK);
    }
    
    @PutMapping(value="/products/update", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
	public ResponseEntity<String> updateProduct(@RequestBody Product product){
		products.save(product);
		return new ResponseEntity<String>("Product Updated",OK);
	}
	
    @GetMapping(value = "/products/find", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<Product> findProduct(@RequestBody Product product) {
        return new ResponseEntity<>(products.findByName(product.getName()), OK);
    }
    
    
	@DeleteMapping(value="/products/delete/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(OK)
	public ResponseEntity<String> deleteProduct(@PathVariable("id")long id){
		products.delete(id);
		return new ResponseEntity<String>("Product Deleted",OK);
	}
    
    @RequestMapping(value="/products/find/{id}",method=RequestMethod.GET)
	public ResponseEntity<Product> findAProduct(@PathVariable("id")long id){
		
		return new ResponseEntity<Product>(products.findOne(id),HttpStatus.OK);
	}

}
