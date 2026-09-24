package br.edu.ifspcjo.ads.web2.ifitness.repository.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import br.edu.ifspcjo.ads.web2.ifitness.domain.model.User;
import br.edu.ifspcjo.ads.web2.ifitness.repository.UserRepository;

@Component
public class StringToUserConverter implements Converter<String, User> {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User convert(String id) {
		if (id == null || id.trim().isEmpty()) {
			return null;
		}
		try {
			return userRepository.findById(Long.parseLong(id)).orElse(null);
		} catch (NumberFormatException e) {
			return null;
		}
	}

}
