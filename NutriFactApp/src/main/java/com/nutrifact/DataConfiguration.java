package com.nutrifact;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;


@Configuration
public class DataConfiguration
{
    /**
     * Anotação Bean para a conexão com o banco.
     * @return
     */
    @Bean
    public DataSource dataSource() {
        DataSourceBuilder dataSource = DataSourceBuilder.create();
        dataSource.driverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.url("jdbc:mysql://localhost:3306/nutrifact");
        dataSource.username("root");
        dataSource.password("nutrifact");
        return dataSource.build();
    }

    /*
    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {

    }
    */
}
